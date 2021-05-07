package org.runner;

import org.junit.runner.RunWith;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Features/BgTagsfeature.feature",glue="org.stepdef",monochrome=true,dryRun=false,tags= {"@sanity","@smoke"})

public class FBRunnner {

}