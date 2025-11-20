from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET'])
@permission_classes([AllowAny])
def health_check(request):
    """Health check endpoint"""
    return Response({
        'status': 'OK',
        'message': 'Atlant Backend is running!'
    }, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([AllowAny])
def api_root(request):
    """API root endpoint with available routes"""
    return Response({
        'message': 'Welcome to Atlant API',
        'endpoints': {
            'health': '/api/health/',
            'auth': {
                'register': '/api/auth/register/',
                'login': '/api/auth/login/',
                'refresh': '/api/auth/token/refresh/',
                'profile': '/api/auth/profile/',
            },
            'docs': {
                'swagger': '/swagger/',
                'redoc': '/redoc/',
            },
            'admin': '/admin/',
        }
    })
