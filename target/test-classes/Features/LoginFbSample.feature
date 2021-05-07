Feature: To validate login functionality of FaceBook loginpage

  Scenario Outline: To validate login functionality of Fcebook with valid username and valid password.
    Given User wants to launch the FaceBook WebPage.
    When User wants to enter his "<UserName>" and "<Password>"
    And user wants to click login button.
    Then User wants to finally quit the FaceBook WebPage.

    Examples: 
      | UserName         | Password |
      | yamini@gmail.com |      123 |
      | koshal@gmail.com |      123 |
      | karthi@gmail.com |      123 |
