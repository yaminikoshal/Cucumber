package org.runner;


import org.junit.runner.RunWith;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Features/HotelFeature.feature",glue="org.stepdef1",monochrome=true)

public class HotelRunner {

}
