# TMS : Confirm Dialog

This README outlines the details of collaborating on this Ember application.

## Prerequisites

* [Bootstrap](http://getbootstrap.com/getting-started/#download)

## Installation

* `npm install --save-dev ember-cli-confirm-dialog`

## Usage

In you template :
```
{{#if isConfirmVisible}}
  {{confirm-modal isVisible=isConfirmVisible 
    confirmationMsg="Are you sure you want to proceed?" title="Confirmation" 
    confirmType="delete" proceed="proceed"}}
{{/if}}
```
Toggle the 'isConfirmVisible' property to view the modal.

Add an action "proceed" with a parameter 'type' in your current route.


## Further Reading / Useful Links

* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
* ember-addons
  * http://hashrocket.com/blog/posts/building-ember-addons
  * http://www.emberaddons.com/
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

