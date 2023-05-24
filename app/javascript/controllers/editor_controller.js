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

    this.element.addEventListener("submit", this.saveEditorData.bind(this))
  }

  async saveEditorData(event) { 
    event.preventDefault();
    const outputData = await this.contentEditor.save();
    const articleForm  = this.element; 
    const hiddenInput = document.getElementById("article_hidden_content");
    hiddenInput.value = JSON.stringify(outputData);
    articleForm.submit();
  }
}
