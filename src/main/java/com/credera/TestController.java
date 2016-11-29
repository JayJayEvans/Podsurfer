package com.credera;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.credera.BarService.BarRequest;
import com.credera.BarService.BarResponse;
import com.google.common.collect.Lists;
import com.google.common.collect.Maps;

@Controller
public class TestController {
	
	// Deliverable 1 - Test 1
	/*
	@RequestMapping("/test")
	@ResponseBody
	public String testLanding()
	{
		return "It works!!!";
	}*/
	
	// Deliverable 1 - Test 2
	/*
	public static class TestDto
	{
		private String prop1;
		private String prop2;
		public TestDto (String prop1, String prop2)
		{
			this.prop1 = prop1;
			this.prop2 = prop2;
		}
		
		public String getProp1()
		{
			return prop1;
		}
		
		public String getProp2()
		{
			return prop2;
		}
	}
	
	@Autowired
	private FooService fooService;

	@ResponseBody
	@RequestMapping("/test")          // required=false makes param optional
	public TestDto testLanding(@RequestParam(value="param1", required=false) String value1,
							   @RequestParam(value="param2", required=false) String value2,
							   Model model)
	{
		model.addAttribute("data1", "We have some data passed to our view!");
		
		String result = fooService.foo(value1, value2);
		
		return new TestDto ("echo: " + value1, "echo: " + value2);
	}
	
	@Service
	public static class FooService 
	{
		public String foo(String value1, String value2)
		{
			String result = "... Do some crap";
			return result;
		}
		
	}
	*/
	
	@Autowired
	private FooService fooService;

	private BarService barService = new BarService();

	@RequestMapping("/test")
	public String testRequestParam(@RequestParam(value = "param1", required = false) String value1, @RequestParam(value = "param2") String value2, Model model) {
		model.addAttribute("data1", "We have some data passed to our view!");

		String result = fooService.foo(value1, value2);
		model.addAttribute("serviceResult", result);
		return "test";
	}

	@RequestMapping("/test/{value1}/{value2}")
	public String testPathVariable(@PathVariable String value1, @PathVariable String value2, HttpServletRequest request, HttpServletResponse response, Model model) {
		String result = fooService.foo(value1, value2);
		model.addAttribute("serviceResult", result);
		return "examples/test2";
	}

	@ResponseBody
	@RequestMapping(value = "/testJson", method = RequestMethod.POST)
	public BarResponse testJson(@RequestBody BarRequest request) {
		return barService.bar(request);
	}

	@ResponseBody
	@RequestMapping(value = "/testJson2", method = RequestMethod.POST)
	public BarResponse testJson() {
		return new BarResponse(Lists.newArrayList("one", "two", "three"), Maps.newHashMap());
		
	}
}