import '../../polymer/polymer.js';
import { IronScrollTargetBehavior } from '../iron-scroll-target-behavior.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
Polymer({
  _template: `
    <style>
      :host {
        display: block;
        font: 14px arial;
      }

      .item {
        border-bottom: 1px solid #ccc;
        background-color: white;
        padding: 20px;
        width: 200%;
      }
    </style>
    <template is="dom-repeat" items="[[_getItems(itemCount)]]">
      <div class="item">[[index]]</div>
    </template>
`,

  is: 'x-scrollable',

  properties: {

    itemCount: {
      type: Number,
      value: 200
    }

  },

  behaviors: [
    IronScrollTargetBehavior
  ],

  _defaultScrollTarget: null,

  _getItems: function(itemCount) {
    var items = new Array(itemCount);
    while (itemCount > 0) {
      items[--itemCount] = true;
    }
    return items;
  }
});
