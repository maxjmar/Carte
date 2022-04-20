class ApplicationController < ActionController::API
    include ActionController::Cookies

    before_action :authorized_user

    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :not_valid


end
