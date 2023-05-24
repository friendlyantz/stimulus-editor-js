import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="editor"
export default class extends Controller {
  connect() {
    console.log("Hello from editor_controller.js")
  }
}
