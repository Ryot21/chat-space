
  ### TABLE1 users--------------------------------------
  |Column|Type|Options|
  |------|----|-------|
  | name     | string  | null: false, index: true|
  | email    | string  | null: false|
  | password | integer | null: false|
  # Association
- has_many :groups, through: :group_users
- has_many :group_users
- has_many :messages

  ### TABLE2 groups--------------------------------------
  |Column|Type|Options|
  |------|----|-------|
  | name | string  | null: false|
  # Association
- has_many   :messages
- has_many   :group_users
- has_many :users, through: :group_users
  ### TABLE3 group_users--------------------------------------
  |Column|Type|Options|
  |------|----|-------|
  | user  | references | null: false, foreign_key: true|
  | group | references | null: false, foreign_key: true|
  # Association
- belongs_to :user
- belongs_to :group

  ### TABLE4 messages--------------------------------------
  |Column|Type|Options|
  |------|----|-------|
  | body       | text       ||
  | image      | string     ||
  | user       | references | null: false, foreign_key: true|
  | group      | references | null: false, foreign_key: true|
  # Association
- belongs_to :user
- belongs_to :group
