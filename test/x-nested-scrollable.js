import '../../polymer/polymer.js';
import './x-scrollable.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
Polymer({
  _template: `
    <style>
      :host {
        display: block;
      }

      #xRegion {
        width: 100px;
        height: 100px;
        overflow: auto;
      }
    </style>

    <div id="xRegion">
      <x-scrollable id="xScrollable" scroll-target="xRegion"></x-scrollable>
    </div>
`,

  is: 'x-nested-scrollable'
});
