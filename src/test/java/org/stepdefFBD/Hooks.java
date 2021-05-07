package org.stepdefFBD;

import org.base.BaseClass;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends BaseClass{
	
	@Before(order=1)
	public void before1() {
		System.out.println("Before1");

	}
	
	@Before(order=2)
	public void before2() {
		System.out.println("Before2");

	}
	
	@After(order=15)
	public void after1(Scenario s) {
		if(s.isFailed()) {
			TakesScreenshot tk=(TakesScreenshot)driver;
			byte[] sc = tk.getScreenshotAs(OutputType.BYTES);
			s.embed(sc, "image/png");
			
		}
		
	}
	
	@After(order=10)
	public void after2() {
		System.out.println("After1");

	}

}
