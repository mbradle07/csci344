from flask import Response, request
from flask_restful import Resource
from models import Post, Following, db
from views import get_authorized_user_ids
import json
import flask_jwt_extended

def get_path():
    return request.host_url + 'api/posts/'

class PostListEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

    @flask_jwt_extended.jwt_required()
    def get(self):
        # get posts created by one of these users:
        #1. Get all of the user_ids of ppl that user #12 is following:
        following = Following.query.filter_by(user_id=self.current_user.id).all()

        # building a list of our friend's usernames
        me_and_my_friend_ids = [rec.following_id for rec in following]
        # for rec in following:
        #     me_and_my_friend_ids.append(rec.following_id)
        me_and_my_friend_ids.append(self.current_user.id)

        try:
            limit = request.args.get('limit') or 20
            limit = int(limit)
        except:
            return Response(
                json.dumps({'error': 'No string for limit.'}), status=400
            )
        if limit > 50:
            return Response(
                json.dumps({'error': 'Bad data. Limit cannot exceed 20.'}), status=400
            )
        posts = Post.query.filter(Post.user_id.in_(me_and_my_friend_ids)).limit(limit)
        return Response(json.dumps([post.to_dict() for post in posts]), mimetype="application/json", status=200)

    @flask_jwt_extended.jwt_required()
    def post(self):
        # create a new post based on the data posted in the body 
        body = request.get_json()
        if not body.get('image_url'):
            return Response(json.dumps({'error': 'image_url required'}), status=400)
        print(body)
        new_post = Post(
            image_url=body.get('image_url'),
            user_id=self.current_user.id, # must be a valid user_id or will throw an error
            caption=body.get('caption'),
            alt_text=body.get('alt_text')
        )
        db.session.add(new_post)    # issues the insert statement
        db.session.commit()
        return Response(json.dumps(new_post.to_dict()), mimetype="application/json", status=201)
    
def get_list_of_user_ids_in_my_network(user_id):
    following = Following.query.filter_by(user_id=user_id).all()
    me_and_my_friend_ids = [rec.following_id for rec in following]
    me_and_my_friend_ids.append(user_id)
    return me_and_my_friend_ids
        
class PostDetailEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user
        
    @flask_jwt_extended.jwt_required()
    def patch(self, id):
        # update post based on the data posted in the body 
        body = request.get_json()
        print(body)   
        post = Post.query.get(id)
        me_and_my_friend_ids = get_list_of_user_ids_in_my_network(self.current_user.id)
        if post is None or post.user_id not in me_and_my_friend_ids :
            error_message = {
                'error': 'post {0} does not exist.'.format(id)
            }
            return Response(json.dumps(error_message), mimetype="application/json", status=404)
        else :
            if body.get('image_url'):
                post.image_url = body.get('image_url')   
            if body.get('caption'):
                post.caption = body.get('caption') 
            if body.get('alt_text'):
                post.alt_text = body.get('alt_text') 
            db.session.commit()
            return Response(json.dumps(post.to_dict()), mimetype="application/json", status=200)

    @flask_jwt_extended.jwt_required()
    def delete(self, id):
        # delete post where "id"=id
        try :
            postID = int(id)
            post = Post.query.get(id)
            me_and_my_friend_ids = get_list_of_user_ids_in_my_network(self.current_user.id)
            if post is None or post.user_id not in me_and_my_friend_ids :
                error_message = {
                    'error': 'post {0} does not exist.'.format(id)
                }
                return Response(json.dumps(error_message), mimetype="application/json", status=404)
            else :
                Post.query.filter_by(id=id).delete()
                db.session.commit()
                return Response(json.dumps({}), mimetype="application/json", status=200)
        except :
            error_message = {
                'error': 'post {0} does not exist.'.format(id)
            }
            return Response(json.dumps(error_message), mimetype="application/json", status=404)

    @flask_jwt_extended.jwt_required()
    def get(self, id):
        post = Post.query.get(id)
        me_and_my_friend_ids = get_list_of_user_ids_in_my_network(self.current_user.id)
        if post is None or post.user_id not in me_and_my_friend_ids :
            error_message = {
                'error': 'post {0} does not exist.'.format(id)
            }
            return Response(json.dumps(error_message), mimetype="application/json", status=404)
        else :
            return Response(json.dumps(post.to_dict()), mimetype="application/json", status=200)
        # # get the post based on the id
        # if(id in me_and_my_friend_ids ) :
        #     post = Post.query.get(id)
        #     if(post in Post.query.all()) :
        #         return Response(json.dumps(post.to_dict()), mimetype="application/json", status=200)
        #     else :
        #         return Response(json.dumps({'error': 'post' + str(id) + 'id does not exist.'}), status=404)  
        # else :
        #     return Response(json.dumps({'error': 'Not authorized'}), status=404)
        
def initialize_routes(api):
    api.add_resource(
        PostListEndpoint, 
        '/api/posts', '/api/posts/', 
        resource_class_kwargs={'current_user': flask_jwt_extended.current_user}
    )
    api.add_resource(
        PostDetailEndpoint, 
        '/api/posts/<int:id>', '/api/posts/<int:id>/',
        resource_class_kwargs={'current_user': flask_jwt_extended.current_user}
    )