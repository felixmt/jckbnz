<?php

namespace JackBenzaken\CmsBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class CmsController extends Controller
{
    public function defaultAction($templateName)
    {
        return $this->render('JackBenzakenCmsBundle:Cms:' . $templateName . '.html.twig');
    }
}
