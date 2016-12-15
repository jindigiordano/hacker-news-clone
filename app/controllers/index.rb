get '/' do
  redirect '/posts'
end

get '/posts' do
  @posts = Post.all
  erb :index
end

post '/posts/:id/vote' do
  post = Post.find(params[:id])
  post.votes.create(value: 1)

  if request.xhr? # if it's ajax
    post.votes.count.to_json #what we're sending back
  else
    redirect "/posts"
  end
end

delete '/posts/:id' do
  # write logic for deleting posts here.
  Post.find(params[:id]).destroy;
end

post '/posts' do

  if request.xhr?
    Post.create( title: params[:title],
                 username: Faker::Internet.user_name,
                 comment_count: rand(1000) ).to_json
    p params
  else
    redirect '/posts'
  end
end

get '/post/:id' do
  @post = Post.find(params[:id])
  erb :post
end
