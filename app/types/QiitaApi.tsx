type QiitaApi = {
  rendered_body: string;
  body: string;
  id: string;
  title: string;
  updated_at: string;
  url: string;
  user: {
    name: string;
    localtion: string;
    profile_image_url: string;
  };
  tags: [
    {
      name: string;
      versions: string[] | null;
    },
  ];
};

export default QiitaApi;
