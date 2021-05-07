$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/FBDfeature.feature");
formatter.feature({
  "name": "To validate login functionality of Hotel loginpage",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate login functionality of FaceBook with valid username and valid password.",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User wants to launch the FaceBook WebPage.",
  "keyword": "Given "
});
formatter.match({
  "location": "FBDataDriven.user_wants_to_launch_the_FaceBook_WebPage()"
});
formatter.result({
  "error_message": "io.github.bonigarcia.wdm.config.WebDriverManagerException: io.github.bonigarcia.wdm.config.WebDriverManagerException: java.net.UnknownHostException: chromedriver.storage.googleapis.com\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:749)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:555)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:746)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:555)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:285)\r\n\tat org.base.BaseClass.chromeBrowser(BaseClass.java:52)\r\n\tat org.stepdefFBD.FBDataDriven.user_wants_to_launch_the_FaceBook_WebPage(FBDataDriven.java:16)\r\n\tat ✽.User wants to launch the FaceBook WebPage.(src/test/resources/Features/FBDfeature.feature:4)\r\nCaused by: io.github.bonigarcia.wdm.config.WebDriverManagerException: java.net.UnknownHostException: chromedriver.storage.googleapis.com\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.getDriversFromXml(WebDriverManager.java:873)\r\n\tat io.github.bonigarcia.wdm.managers.ChromeDriverManager.getDriverUrls(ChromeDriverManager.java:101)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.createUrlHandler(WebDriverManager.java:755)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.download(WebDriverManager.java:627)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:549)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:746)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:555)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:285)\r\n\tat org.base.BaseClass.chromeBrowser(BaseClass.java:52)\r\n\tat org.stepdefFBD.FBDataDriven.user_wants_to_launch_the_FaceBook_WebPage(FBDataDriven.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\nCaused by: java.net.UnknownHostException: chromedriver.storage.googleapis.com\r\n\tat java.net.InetAddress.getAllByName0(InetAddress.java:1280)\r\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1192)\r\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1126)\r\n\tat org.apache.hc.client5.http.SystemDefaultDnsResolver.resolve(SystemDefaultDnsResolver.java:43)\r\n\tat org.apache.hc.client5.http.impl.io.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:118)\r\n\tat org.apache.hc.client5.http.impl.io.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:413)\r\n\tat org.apache.hc.client5.http.impl.classic.InternalExecRuntime.connectEndpoint(InternalExecRuntime.java:164)\r\n\tat org.apache.hc.client5.http.impl.classic.InternalExecRuntime.connectEndpoint(InternalExecRuntime.java:174)\r\n\tat org.apache.hc.client5.http.impl.classic.ConnectExec.execute(ConnectExec.java:135)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement.execute(ExecChainElement.java:51)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement$1.proceed(ExecChainElement.java:57)\r\n\tat org.apache.hc.client5.http.impl.classic.ProtocolExec.execute(ProtocolExec.java:169)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement.execute(ExecChainElement.java:51)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement$1.proceed(ExecChainElement.java:57)\r\n\tat org.apache.hc.client5.http.impl.classic.HttpRequestRetryExec.execute(HttpRequestRetryExec.java:93)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement.execute(ExecChainElement.java:51)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement$1.proceed(ExecChainElement.java:57)\r\n\tat org.apache.hc.client5.http.impl.classic.ContentCompressionExec.execute(ContentCompressionExec.java:128)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement.execute(ExecChainElement.java:51)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement$1.proceed(ExecChainElement.java:57)\r\n\tat org.apache.hc.client5.http.impl.classic.RedirectExec.execute(RedirectExec.java:116)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement.execute(ExecChainElement.java:51)\r\n\tat org.apache.hc.client5.http.impl.classic.InternalHttpClient.doExecute(InternalHttpClient.java:178)\r\n\tat org.apache.hc.client5.http.impl.classic.CloseableHttpClient.execute(CloseableHttpClient.java:75)\r\n\tat org.apache.hc.client5.http.impl.classic.CloseableHttpClient.execute(CloseableHttpClient.java:89)\r\n\tat io.github.bonigarcia.wdm.online.HttpClient.execute(HttpClient.java:138)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.getDriversFromXml(WebDriverManager.java:858)\r\n\t... 49 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User wants to enter his UserName and Password",
  "keyword": "When "
});
formatter.match({
  "location": "FBDataDriven.user_wants_to_enter_his_UserName_and_Password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user wants to click login",
  "keyword": "When "
});
formatter.match({
  "location": "FBDataDriven.user_wants_to_click_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User wants to finally quit the FaceBook WebPage.",
  "keyword": "Then "
});
formatter.match({
  "location": "FBDataDriven.user_wants_to_finally_quit_the_FaceBook_WebPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat org.stepdefFBD.Hooks.after1(Hooks.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login functionality of FaceBook with valid username and valid password.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User wants to launch the FaceBook WebPage.",
  "keyword": "Given "
});
formatter.match({
  "location": "FBDataDriven.user_wants_to_launch_the_FaceBook_WebPage()"
});
formatter.result({
  "error_message": "io.github.bonigarcia.wdm.config.WebDriverManagerException: io.github.bonigarcia.wdm.config.WebDriverManagerException: java.net.UnknownHostException: chromedriver.storage.googleapis.com\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:749)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:555)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:746)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:555)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:285)\r\n\tat org.base.BaseClass.chromeBrowser(BaseClass.java:52)\r\n\tat org.stepdefFBD.FBDataDriven.user_wants_to_launch_the_FaceBook_WebPage(FBDataDriven.java:16)\r\n\tat ✽.User wants to launch the FaceBook WebPage.(src/test/resources/Features/FBDfeature.feature:10)\r\nCaused by: io.github.bonigarcia.wdm.config.WebDriverManagerException: java.net.UnknownHostException: chromedriver.storage.googleapis.com\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.getDriversFromXml(WebDriverManager.java:873)\r\n\tat io.github.bonigarcia.wdm.managers.ChromeDriverManager.getDriverUrls(ChromeDriverManager.java:101)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.createUrlHandler(WebDriverManager.java:755)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.download(WebDriverManager.java:627)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:549)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:746)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:555)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:285)\r\n\tat org.base.BaseClass.chromeBrowser(BaseClass.java:52)\r\n\tat org.stepdefFBD.FBDataDriven.user_wants_to_launch_the_FaceBook_WebPage(FBDataDriven.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\nCaused by: java.net.UnknownHostException: chromedriver.storage.googleapis.com\r\n\tat java.net.InetAddress.getAllByName0(InetAddress.java:1280)\r\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1192)\r\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1126)\r\n\tat org.apache.hc.client5.http.SystemDefaultDnsResolver.resolve(SystemDefaultDnsResolver.java:43)\r\n\tat org.apache.hc.client5.http.impl.io.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:118)\r\n\tat org.apache.hc.client5.http.impl.io.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:413)\r\n\tat org.apache.hc.client5.http.impl.classic.InternalExecRuntime.connectEndpoint(InternalExecRuntime.java:164)\r\n\tat org.apache.hc.client5.http.impl.classic.InternalExecRuntime.connectEndpoint(InternalExecRuntime.java:174)\r\n\tat org.apache.hc.client5.http.impl.classic.ConnectExec.execute(ConnectExec.java:135)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement.execute(ExecChainElement.java:51)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement$1.proceed(ExecChainElement.java:57)\r\n\tat org.apache.hc.client5.http.impl.classic.ProtocolExec.execute(ProtocolExec.java:169)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement.execute(ExecChainElement.java:51)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement$1.proceed(ExecChainElement.java:57)\r\n\tat org.apache.hc.client5.http.impl.classic.HttpRequestRetryExec.execute(HttpRequestRetryExec.java:93)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement.execute(ExecChainElement.java:51)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement$1.proceed(ExecChainElement.java:57)\r\n\tat org.apache.hc.client5.http.impl.classic.ContentCompressionExec.execute(ContentCompressionExec.java:128)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement.execute(ExecChainElement.java:51)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement$1.proceed(ExecChainElement.java:57)\r\n\tat org.apache.hc.client5.http.impl.classic.RedirectExec.execute(RedirectExec.java:116)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement.execute(ExecChainElement.java:51)\r\n\tat org.apache.hc.client5.http.impl.classic.InternalHttpClient.doExecute(InternalHttpClient.java:178)\r\n\tat org.apache.hc.client5.http.impl.classic.CloseableHttpClient.execute(CloseableHttpClient.java:75)\r\n\tat org.apache.hc.client5.http.impl.classic.CloseableHttpClient.execute(CloseableHttpClient.java:89)\r\n\tat io.github.bonigarcia.wdm.online.HttpClient.execute(HttpClient.java:138)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.getDriversFromXml(WebDriverManager.java:858)\r\n\t... 49 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User wants to enter his UserName and Password",
  "keyword": "When "
});
formatter.match({
  "location": "FBDataDriven.user_wants_to_enter_his_UserName_and_Password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user wants to click login",
  "keyword": "When "
});
formatter.match({
  "location": "FBDataDriven.user_wants_to_click_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User wants to finally quit the FaceBook WebPage.",
  "keyword": "Then "
});
formatter.match({
  "location": "FBDataDriven.user_wants_to_finally_quit_the_FaceBook_WebPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat org.stepdefFBD.Hooks.after1(Hooks.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login functionality of FaceBook with valid username and valid password.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User wants to launch the FaceBook WebPage.",
  "keyword": "Given "
});
formatter.match({
  "location": "FBDataDriven.user_wants_to_launch_the_FaceBook_WebPage()"
});
formatter.result({
  "error_message": "io.github.bonigarcia.wdm.config.WebDriverManagerException: io.github.bonigarcia.wdm.config.WebDriverManagerException: java.net.UnknownHostException: chromedriver.storage.googleapis.com\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:749)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:555)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:746)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:555)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:285)\r\n\tat org.base.BaseClass.chromeBrowser(BaseClass.java:52)\r\n\tat org.stepdefFBD.FBDataDriven.user_wants_to_launch_the_FaceBook_WebPage(FBDataDriven.java:16)\r\n\tat ✽.User wants to launch the FaceBook WebPage.(src/test/resources/Features/FBDfeature.feature:17)\r\nCaused by: io.github.bonigarcia.wdm.config.WebDriverManagerException: java.net.UnknownHostException: chromedriver.storage.googleapis.com\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.getDriversFromXml(WebDriverManager.java:873)\r\n\tat io.github.bonigarcia.wdm.managers.ChromeDriverManager.getDriverUrls(ChromeDriverManager.java:101)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.createUrlHandler(WebDriverManager.java:755)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.download(WebDriverManager.java:627)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:549)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:746)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:555)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:285)\r\n\tat org.base.BaseClass.chromeBrowser(BaseClass.java:52)\r\n\tat org.stepdefFBD.FBDataDriven.user_wants_to_launch_the_FaceBook_WebPage(FBDataDriven.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\nCaused by: java.net.UnknownHostException: chromedriver.storage.googleapis.com\r\n\tat java.net.InetAddress.getAllByName0(InetAddress.java:1280)\r\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1192)\r\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1126)\r\n\tat org.apache.hc.client5.http.SystemDefaultDnsResolver.resolve(SystemDefaultDnsResolver.java:43)\r\n\tat org.apache.hc.client5.http.impl.io.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:118)\r\n\tat org.apache.hc.client5.http.impl.io.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:413)\r\n\tat org.apache.hc.client5.http.impl.classic.InternalExecRuntime.connectEndpoint(InternalExecRuntime.java:164)\r\n\tat org.apache.hc.client5.http.impl.classic.InternalExecRuntime.connectEndpoint(InternalExecRuntime.java:174)\r\n\tat org.apache.hc.client5.http.impl.classic.ConnectExec.execute(ConnectExec.java:135)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement.execute(ExecChainElement.java:51)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement$1.proceed(ExecChainElement.java:57)\r\n\tat org.apache.hc.client5.http.impl.classic.ProtocolExec.execute(ProtocolExec.java:169)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement.execute(ExecChainElement.java:51)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement$1.proceed(ExecChainElement.java:57)\r\n\tat org.apache.hc.client5.http.impl.classic.HttpRequestRetryExec.execute(HttpRequestRetryExec.java:93)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement.execute(ExecChainElement.java:51)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement$1.proceed(ExecChainElement.java:57)\r\n\tat org.apache.hc.client5.http.impl.classic.ContentCompressionExec.execute(ContentCompressionExec.java:128)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement.execute(ExecChainElement.java:51)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement$1.proceed(ExecChainElement.java:57)\r\n\tat org.apache.hc.client5.http.impl.classic.RedirectExec.execute(RedirectExec.java:116)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement.execute(ExecChainElement.java:51)\r\n\tat org.apache.hc.client5.http.impl.classic.InternalHttpClient.doExecute(InternalHttpClient.java:178)\r\n\tat org.apache.hc.client5.http.impl.classic.CloseableHttpClient.execute(CloseableHttpClient.java:75)\r\n\tat org.apache.hc.client5.http.impl.classic.CloseableHttpClient.execute(CloseableHttpClient.java:89)\r\n\tat io.github.bonigarcia.wdm.online.HttpClient.execute(HttpClient.java:138)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.getDriversFromXml(WebDriverManager.java:858)\r\n\t... 49 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User wants to enter his UserName and Password",
  "keyword": "When "
});
formatter.match({
  "location": "FBDataDriven.user_wants_to_enter_his_UserName_and_Password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user wants to click login",
  "keyword": "When "
});
formatter.match({
  "location": "FBDataDriven.user_wants_to_click_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User wants to finally quit the FaceBook WebPage.",
  "keyword": "Then "
});
formatter.match({
  "location": "FBDataDriven.user_wants_to_finally_quit_the_FaceBook_WebPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat org.stepdefFBD.Hooks.after1(Hooks.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});