class AddForeignKey < ActiveRecord::Migration[6.0]
  def change
    add_column :gifts, :birthday_id, :integer
  end
end
