package com.example.demo.controller;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.example.demo.domain.RoomVO;
import com.example.demo.domain.SurveyVO;
import com.example.demo.service.SurveyService;

@Controller
public class SurveyController {

	private static final Logger Logger = LoggerFactory.getLogger(SurveyController.class);
	
	@Inject
	SurveyService surveyService;
	
	@RequestMapping(value = "/proom", method = RequestMethod.GET)
	public String readSurvey(SurveyVO surveyVO, Model model, RoomVO roomVO) throws Exception {
		Logger.info("readSurvey");	
		Logger.info("read");
		
		model.addAttribute("readSurvey", surveyService.readSurvey(surveyVO.getRoom_id()));	
		model.addAttribute("read", surveyService.read(roomVO.getRoom_id()));
		
		return "proom";
	}
}
