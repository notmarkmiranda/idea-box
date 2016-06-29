class CreateIdeaTags < ActiveRecord::Migration
  def change
    create_table :idea_tags do |t|
      t.references :idea, index: true, foreign_key: true
      t.references :tag, index: true, foreign_key: true
    end
  end
end
