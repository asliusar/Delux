class CreatePartners < ActiveRecord::Migration
  def change
    create_table :partners do |t|
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end
