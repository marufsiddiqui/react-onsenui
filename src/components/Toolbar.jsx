import SimpleWrapper from './SimpleWrapper.jsx';
import React from 'react';

/**
 * @original ons-toolbar
 * @category toolbar
 * @description
 * [en]  Toolbar component that can be used with navigation. Left, center and right container can be specified by class names.  This component will automatically displays as a Material Design toolbar when running on Android devices.
 * [jp] どうしよう[/jp]
 * @example
 *
<Page renderToolbar={() =>
   <Toolbar>
     <div class="left">
       <BackButton>
         Back
       </BackButton>
     </div>
     <div class="center">
       Title
     </div>
     <div class="right">
       <ToolbarButton>
         <Icon icon="md-menu"></ons-icon>
       </ToolbarButton>
     </div>
   </Toolbar> } />
 */
class Toolbar extends SimpleWrapper {
  _getDomNodeName() {
    return 'ons-toolbar';
  }
};

Toolbar.propTypes = {
  /**
   * @name modifier
   * @type string
   * @description
   *  [en]
   *  Specify modifier name to specify custom styles. Optional.
   *  [/en]
   *  [jp] どうしよう[/jp]
   */
  modifier: React.PropTypes.string
};

export default Toolbar;
