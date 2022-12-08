module.exports = ({ env }) => ({
    // ...
    slugify: {
      enabled: true,
      config: {
        contentTypes: {
          department: {
            field: 'slug',
            references: 'name',
          },
          division: {
            field: 'slug',
            references: 'name'
          },
          proker: {
            field: 'slug',
            references: 'name'
          },
          adkesma: {
            field: 'slug',
            references: 'name'
          },
          berita : {
            field: 'slug',
            references: 'name'
          }
        },
      },
    },
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    ckeditor: true
    // ...
  });