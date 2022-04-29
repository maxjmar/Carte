class ApplicationController < ActionController::API
    include ActionController::Cookies

    before_action :authorized_user

    rescue_from ActiveRecord::RecordInvalid, with: :not_valid
    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def active_user
        User.find_by(id: session[:active_user])
    end

    def authorized_user
        render json: {errors: "Not Authorized"}, status: :unauthorized unless active_user
    end

    private
    def not_found(error)
        render json: {error: error.model + " not found"}, status: :not_found
    end

    def  not_valid(invalid)
		render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
	end
end
