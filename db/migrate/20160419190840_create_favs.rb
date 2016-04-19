class CreateFavs < ActiveRecord::Migration
  def change
    create_table :favs do |t|
      t.belongs_to :cheese, index: true, foreign_key: true
      t.belongs_to :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
