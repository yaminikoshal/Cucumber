package org.stepdef;




import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginFB {
	WebDriver driver;
	
	@Given("User wants to launch the FaceBook WebPage.")
	public void user_wants_to_launch_the_FaceBook_WebPage() {
	WebDriverManager.chromedriver().setup();
	driver=new ChromeDriver();
	driver.get("https://www.facebook.com/");
	driver.manage().window().maximize();
	}
	
	@When("User wants to enter his {string} and {string}")
	public void user_wants_to_enter_his_and(String user, String pass) {
	    driver.findElement(By.name("mail")).sendKeys(user);
	    driver.findElement(By.name("pass")).sendKeys(pass);
	}

	@When("user wants to click login button.")
	public void user_wants_to_click_login_button() {
	   driver.findElement(By.name("login")).click(); 
	}

	@Then("User wants to finally quit the FaceBook WebPage.")
	public void user_wants_to_finally_quit_the_FaceBook_WebPage() {
	    driver.quit();
	    System.out.println("Done");
	}
}
