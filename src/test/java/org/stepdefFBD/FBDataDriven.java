package org.stepdefFBD;

import java.io.IOException;

import org.base.BaseClass;
import org.junit.Assert;
import org.pojo.Fbpojo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FBDataDriven extends BaseClass {
	@Given("User wants to launch the FaceBook WebPage.")
	public void user_wants_to_launch_the_FaceBook_WebPage() {
		chromeBrowser();
		urlLaunch("https://www.facebook.com/");
		driver.manage().window().maximize();
		
	}

	@When("User wants to enter his UserName and Password")
	public void user_wants_to_enter_his_UserName_and_Password() throws IOException {
		Fbpojo  p= new Fbpojo ();
		String s = toIteration("login", 2, 1);
		fillText(p.getToUser(), s);
		fillText(p.getToPsd(), s);
	}

	@When("user wants to click login")
	public void user_wants_to_click_login() {
		Fbpojo  p= new Fbpojo ();
		btnClick(p.getToLoginfb());
		//Assert.assertTrue(false);
	}

	@Then("User wants to finally quit the FaceBook WebPage.")
	public void user_wants_to_finally_quit_the_FaceBook_WebPage() {
	    driver.quit();
	}


}
