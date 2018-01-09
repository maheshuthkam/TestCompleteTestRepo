function GoogleTestScript()
{
  //Clicks at point (1229, 94) of the 'wndTaskListThumbnailWnd' object.
  Aliases.explorer.wndTaskListThumbnailWnd.Click(1229, 94);
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://support.smartbear.com/testcomplete/docs/reference/options/source-control.html");
  //Clicks at point (102, 24) of the 'textnode' object.
  Aliases.browser.pageSupportSmartbearComTestcompl.panel.panel.textnode.Click(102, 24);
  //Enters 'gm' in the 'pageSupportSmartbearComTestcompl' object.
  Aliases.browser.pageSupportSmartbearComTestcompl.Keys("gm");
  //Clicks at point (90, 26) of the 'textnode' object.
  Aliases.browser.pageSupportSmartbearComTestcompl.panel.panel.textnode.Click(90, 26);
  //Enters 'a' in the 'pageSupportSmartbearComTestcompl' object.
  Aliases.browser.pageSupportSmartbearComTestcompl.Keys("a");
  //Enters 'il.comgmamail.com' in the 'pageSupportSmartbearComTestcompl' object.
  Aliases.browser.pageSupportSmartbearComTestcompl.Keys("il.comgmamail.com");
  //Clicks at point (210, 33) of the 'textnode' object.
  Aliases.browser.pageSupportSmartbearComTestcompl.panel.panel.textnode.Click(210, 33);
  //Enters '[BS][BS][BS][BS][BS][BS][BS][BS][BS][BS][BS][BS][BS]om[Enter]' in the 'pageSupportSmartbearComTestcompl' object.
  Aliases.browser.pageSupportSmartbearComTestcompl.Keys("[BS][BS][BS][BS][BS][BS][BS][BS][BS][BS][BS][BS][BS]om[Enter]");
  //Clicks the 'link' link.
  Aliases.browser.pageSupportSmartbearComTestcompl.panel.panel2.panel.panel.link.Click();
  //Clicks at point (182, 1) of the 'cell' object.
  Aliases.browser.pageSupportSmartbearComTestcompl.panel.panel.panel.table.cell.Click(182, 1);
  //Clicks the 'link' link.
  Aliases.browser.pageSupportSmartbearComTestcompl.panel.panel.panel.table.cell.link.Click();
}