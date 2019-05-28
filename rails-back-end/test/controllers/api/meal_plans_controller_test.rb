require 'test_helper'

class Api::MealPlansControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_meal_plans_index_url
    assert_response :success
  end

end
