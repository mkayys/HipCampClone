class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end

    end

    def show
        @user = User.find(params[:id])
        render 'api/users/show'
    end

    private

    def user_params
        params.require(:user).transform_keys(&:underscore).permit(:first_name, :last_name, :email, :password, :zip_code)
    end
end
