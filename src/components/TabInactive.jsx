import SimpleWrapper from './SimpleWrapper.jsx';

/**
 * @original ons-tab-inactive
 * @category tabbar
 * @description
 * [en] Tab element for showing shown when the tab is inactive [/en]
 * [jp][/jp]
 * @example
 * <Tab>
 *   <TabActive>
       HOME
     </TabInActive>
     <TabInActive>
       home
     </TabInActive>
   </Tab>
 */
class TabInactive extends SimpleWrapper {
  _getDomNodeName() {
    return 'ons-tab-inactive';
  }
};

export default TabInactive;
