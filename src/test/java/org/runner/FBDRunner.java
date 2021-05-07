package org.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.jvm.JVMReport;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/Features//FBDfeature.feature", glue = "org.stepdefFBD", monochrome = true, dryRun = false, plugin = {
		"html:C:\\Users\\Yamini\\eclipse-workspace3\\Cucumber\\Report\\HTMLReport",
		"json:C:\\Users\\Yamini\\eclipse-workspace3\\Cucumber\\Report\\jsonReport\\fb.json",
		"junit:C:\\Users\\Yamini\\eclipse-workspace3\\Cucumber\\Report\\XMLReport\\facebook.xml" })

public class FBDRunner {

	@AfterClass
	public static void GenerateAll() {
		JVMReport.JVM("C:\\Users\\Yamini\\eclipse-workspace3\\Cucumber\\Report\\jsonReport\\fb.json");
		System.out.println("done");

	}
}