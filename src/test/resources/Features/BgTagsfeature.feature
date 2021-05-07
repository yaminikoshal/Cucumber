Feature: To validate login functionality of FaceBook loginpage

  Background: 
    Given User wants to launch the FaceBook WebPage.
    
@smoke @sanity
  Scenario Outline: To validate login functionality of Fcebook with valid username and valid password.
    When User wants to enter his "<username>" and "<password>"
    And user wants to click login button.
    Then User wants to finally quit the FaceBook WebPage.

    Examples: 
      | username         | password |
      | Koshal@gmail.com |      123 |

@smoke
  Scenario Outline: To validate login functionality of Fcebook with invalid username and invalid password.
    When User wants to enter his "<username>" and "<password>"
    And user wants to click login button.
    Then User wants to finally quit the FaceBook WebPage.

    Examples: 
      | username         | password |
      | Koshal@gmail.com |      123 |

@Reg
  Scenario Outline: To validate login functionality of Fcebook with valid username and invalid password.
    When User wants to enter his "<username>" and "<password>"
    And user wants to click login button.
    Then User wants to finally quit the FaceBook WebPage.

    Examples: 
      | username         | password |
      | Koshal@gmail.com |      123 |
   
 @sanity
  Scenario Outline: To validate login functionality of Fcebook with invalid username and valid password.
    When User wants to enter his "<username>" and "<password>"
    And user wants to click login button.
    Then User wants to finally quit the FaceBook WebPage.

    Examples: 
      | username         | password |
      | Koshal@gmail.com |      123 |