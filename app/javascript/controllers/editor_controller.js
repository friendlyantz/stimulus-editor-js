import { Controller } from "@hotwired/stimulus"
import EditorJS from "@editorjs/editorjs"

// Connects to data-controller="editor"
export default class extends Controller {
  static targets = [ "article_content"];
  connect() {
    console.log("Hello from editor_controller.js")

    this.contentEditor = new EditorJS({
      holder: this.article_contentTarget,
    });
  }
}
