class SupportGood < ActiveRecord::Base
	validates :title, presence: true
	validates :avatar,
	attachment_content_type: { content_type: /\Aimage\/.*\Z/ },
	attachment_size: { less_than: 5.megabytes }
	has_attached_file :avatar
	def categories=(categories)
		categories.reject(&:blank?)
		File.open(look.txt, 'w') { |file| file.write("+" + categories) }
	end
   #has_attached_file :avatar, :styles => { :medium => "400x", :thumb => ["200x", :png] }
end
