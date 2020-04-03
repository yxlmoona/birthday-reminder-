class CreateBirthdays < ActiveRecord::Migration[6.0]
  def change
    create_table :birthdays do |t|
      t.string :name
      t.string :dob
      t.string :relationship
      t.string :gift

      t.timestamps
    end
  end
end
