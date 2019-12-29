interface SeiyuuDetails {
  id: string;
  image_url: string;
  website_url: string;
  name: string;
  given_name: string;
  family_name: string;
  alternate_names: string[];
  member_favorites: number;
  about: string;
  voice_acting_roles: VoiceActingRole[];
}
