Feature: To validate login functionality of FaceBook loginpage

  Scenario: To validate login functionality of Fcebook with valid username and valid password.
    Given User wants to launch the FaceBook WebPage.
    When User wants to enter his UserName and Password
      | username | Koshal@gmail.com |
      | password |              123 |
    And user wants to click login button.
    Then User wants to finally quit the FaceBook WebPage.
