package org.stepdef1;

import java.io.IOException;

import org.base.BaseClass;
import org.pojo.HotelLoginPojo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HotelLogin extends BaseClass {
	
	
	@Given("User wants to launch the Hotel WebPage.")
	public void user_wants_to_launch_the_Hotel_WebPage() {
		chromeBrowser();
		urlLaunch("http://www.adactin.com/HotelApp/");
		driver.manage().window().maximize();
	}

	@When("User wants to enter his UserName and Password")
	public void user_wants_to_enter_his_UserName_and_Password() {
		HotelLoginPojo p= new HotelLoginPojo();
		fillText(p.getToUser(), "yaminiRaveendran");
		fillText(p.getToPsd(), "Aa!@#123");
		btnClick(p.getToLogin());
	}
	
	@When("User want to search Hotel")
	public void user_want_to_search_Hotel() throws IOException {
		HotelLoginPojo p= new HotelLoginPojo();
		toSelectByVisibleText(p.getToLocation(),"Adelaide");
		toSelectByVisibleText(p.getToHotels(),"Hotel Hervey");
		toSelectByVisibleText(p.getToRoomType(),"Double");
		toSelectByVisibleText(p.getToRoomNo(),"4 - Four");
		
		toClear(p.getToDateIn());
		String datein = toIteration("H1", 1, 0);
		fillText(p.getToDateIn(), datein);
		
		toClear(p.getToDateOut());
		String dateout = toIteration("H1", 1, 1);
		fillText(p.getToDateOut(), dateout);
		
		toSelectByVisibleText(p.getToAdultRoom(),"3 - Three");
		toSelectByVisibleText(p.getToChild(), "1 - One");
		btnClick(p.getToSearch());	
	}
	
	@When("user wants to select Hotel")
	public void user_wants_to_select_Hotel() {
		HotelLoginPojo p= new HotelLoginPojo();
		btnClick(p.getToSelect());
		btnClick(p.getToContinue());
	}
	
	@When("user wants to book a Hotel")
	public void user_wants_to_book_a_Hotel() {
		HotelLoginPojo p= new HotelLoginPojo();
		fillText(p.getToFirstName(), "yamini");
		fillText(p.getToLastName(), "Raveendran");
		fillText(p.getToAddress(), "Krishnagirir");
		fillText(p.getToCcNo(), "1234567890123456");
		toSelectByVisibleText(p.getToCcType(), "VISA");
		toSelectByVisibleText(p.getToExpMonth(), "May");
		toSelectByVisibleText(p.getToExpYear(), "2022");
		fillText(p.getToCvv(), "123");
		btnClick(p.getToBookNow());
	}
	
	@Then("User wants to finally quit the Hotel WebPage.")
	public void user_wants_to_finally_quit_the_Hotel_WebPage() {
		driver.quit();
	}


}
