require 'test_helper'

class SessionsControllerTest < ActionController::TestCase
  test "should get sign_in" do
    get :sign_in
    assert_response :success
  end

  test "should get create" do
    get :create
    assert_response :success
  end

  test "should get destroy" do
    get :destroy
    assert_response :success
  end

  test "should get sign_out" do
    get :sign_out
    assert_response :success
  end

end
