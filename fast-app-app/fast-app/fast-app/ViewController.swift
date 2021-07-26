//
//  ViewController.swift
//  fast-app
//
//  Created by Jerry Hoover on 2021.07.25.
//

import UIKit
import WebKit
class ViewController: UIViewController, WKUIDelegate {
   var webView: WKWebView!
   override func viewDidLoad() {
      super.viewDidLoad()
      let myURL = URL(string:"https://saxondate.com/fast-app")
      let myRequest = URLRequest(url: myURL!)
      webView.load(myRequest)
   }
   override func loadView() {
      let webConfiguration = WKWebViewConfiguration()
      webView = WKWebView(frame: .zero, configuration: webConfiguration)
      webView.uiDelegate = self
      view = webView
   }
}

