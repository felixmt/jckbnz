<?php

namespace JackBenzaken\CmsBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class CmsController extends Controller
{
    public function defaultAction($templateName)
    {
		$response = $this->render('JackBenzakenCmsBundle:Cms:' . $templateName . '.html.twig');
		$response->setPublic();
		$response->setMaxAge(600);
		$response->setSharedMaxAge(600);
		
		return $response;
    }
}
