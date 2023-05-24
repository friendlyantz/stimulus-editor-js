# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"
pin "@editorjs/editorjs", to: "https://ga.jspm.io/npm:@editorjs/editorjs@2.27.0/dist/editorjs.mjs"
pin "@editorjs/code", to: "https://ga.jspm.io/npm:@editorjs/code@2.8.0/dist/bundle.js"
pin "@editorjs/header", to: "https://ga.jspm.io/npm:@editorjs/header@2.7.0/dist/bundle.js"
pin "@editorjs/list", to: "https://ga.jspm.io/npm:@editorjs/list@1.8.0/dist/bundle.js"
pin "@editorjs/paragraph", to: "https://ga.jspm.io/npm:@editorjs/paragraph@2.9.0/dist/bundle.js"
