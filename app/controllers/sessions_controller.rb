class SessionsController < ApplicationController
    skip_before_action :authorized_user, only: [:login, :logout]

    def login
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: {error: "Invalid username or password"}, status: :unauthorized
        end
    end

    def logout
        session.delete :user_id
        render json: {}, status: :ok
    end
end