module.exports = {
  put: {
    tags: ['File Operations'],
    summary: 'Make a file public',
    description: 'Makes a file/folder accessible without authorization.',
    parameters: [{
      name: 'id',
      in: 'path',
      description: "File's Id",
      required: true,
      schema: {
        type: 'string',
      },
    }],
    security: [
      {
        'Authorization Token': [],
      },
    ],
    responses: {
      200: {
        description: 'Successful',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                  description: "File's ID",
                },
                userId: {
                  type: 'string',
                  description: "User's ID",
                },
                name: {
                  type: 'string',
                  description: "File's name",
                },
                type: {
                  type: 'string',
                  description: "File's type",
                },
                isPublic: {
                  type: 'boolean',
                  description: 'File can be assessed without authorization',
                },
                parentId: {
                  type: 'string',
                  description: 'ID of folder file is in',
                },
              },
            },
          },
        },
      },
      400: {
        description: "File's Id is invalid",
      },
      401: {
        description: 'Authorization token in header is invalid or missing, or user does not exist',
      },
      404: {
        description: 'File not found',
      },
    },
  },
};
