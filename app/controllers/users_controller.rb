class UsersController < ApplicationController
    # skip_before_action :authorized_user, only: [:index, :show]
    def index
        render json: User.all, status: :ok
    end

    # def create
    #     user = User.create!(user_params)
    #     render json: user, status: :created
    # end

    def show
        if active_user
            render json: active_user, status: :ok
        else
            render json: {error: "No Active Users"}, status: :unauthorized
        end
    end

    # def update
    #     user = User.find_by(id: session[:active_user])
    #     user.update!(user_params)
    #     render json: user, status: :accepted
    # end

    private
    def user_params
        params.permit(:username, :password, :id)
    end
end
