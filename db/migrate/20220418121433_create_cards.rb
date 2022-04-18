class CreateCards < ActiveRecord::Migration[6.1]
  def change
    create_table :cards do |t|
      t.string :owner
      t.string :notes
      t.belongs_to :user
      t.belongs_to :category

      t.timestamps
    end
  end
end
