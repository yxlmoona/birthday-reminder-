require 'test_helper'

class BirthdaysControllerTest < ActionDispatch::IntegrationTest
  setup do
    @birthday = birthdays(:one)
  end

  test "should get index" do
    get birthdays_url, as: :json
    assert_response :success
  end

  test "should create birthday" do
    assert_difference('Birthday.count') do
      post birthdays_url, params: { birthday: { dob: @birthday.dob, gift: @birthday.gift, name: @birthday.name, relationship: @birthday.relationship } }, as: :json
    end

    assert_response 201
  end

  test "should show birthday" do
    get birthday_url(@birthday), as: :json
    assert_response :success
  end

  test "should update birthday" do
    patch birthday_url(@birthday), params: { birthday: { dob: @birthday.dob, gift: @birthday.gift, name: @birthday.name, relationship: @birthday.relationship } }, as: :json
    assert_response 200
  end

  test "should destroy birthday" do
    assert_difference('Birthday.count', -1) do
      delete birthday_url(@birthday), as: :json
    end

    assert_response 204
  end
end
