class CreateArticles < ActiveRecord::Migration[7.0]
  def change
    create_table :articles do |t|
      t.string :text
      t.json :content

      t.timestamps
    end
  end
end
