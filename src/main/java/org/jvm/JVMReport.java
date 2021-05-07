package org.jvm;


import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JVMReport {
	public static void JVM(String json) {
		File f=new File("C:\\Users\\Yamini\\eclipse-workspace3\\Cucumber\\Report\\JVMReport");
		
		Configuration c=new Configuration(f, "FaceBook Functionallity");
		
		c.addClassifications("platform", "windows");
		c.addClassifications("platformversion","10");
		c.addClassifications("Environment", "testing");
		c.addClassifications("Bulid No", "12");
		
		List<String> l= new ArrayList<String>();
		l.add(json);
		
	   ReportBuilder r=new ReportBuilder(l,c);
	   r.generateReports();
		
	}

}
