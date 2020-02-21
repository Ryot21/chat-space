
  ### TABLE1 users--------------------------------------
  |------|----|-------|
  | name     | string  | null: false|
  | email    | string  | null: false|
  | password | integer | null: false|
  # Association
- has_many :group
- has_many :group_users
- has_many :messages

  ### TABLE2 group--------------------------------------
  |Column|Type|Options|
  |------|----|-------|
  | group_id | string  | null: false|
  # Association
- has_many   :messages
- has_many   :group_users
- belongs_to :user

  ### TABLE3 group_users--------------------------------------
  |Column|Type|Options|
  |------|----|-------|
  | use_id   | string  | null: false, foreign_key: true|
  | group_id | string  | null: false, foreign_key: true|
  # Association
- belongs_to :user
- belongs_to :group

  ### TABLE4 messages--------------------------------------
  |Column|Type|Options|
  |------|----|-------|
  | body       | text    | null: false|
  | image      | string  ||
  | user_id    | integer | null: false, foreign_key: true|
  | group_id   | integer | null: false, foreign_key: true|
  # Association
- belongs_to :user
- belongs_to :group
